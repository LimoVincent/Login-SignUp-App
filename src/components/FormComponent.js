import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import Checkbox from 'antd/lib/checkbox/Checkbox'
import Form from 'antd/lib/form/Form'
import FormItem from 'antd/lib/form/FormItem'

function FormComponent({ info, setInfo }) {
  const { description, location, fulltime, remote } = info
  return (
    <Form>
      <FormItem label='Job Description'>
        <Input
          value={description}
          onChange={(e) => setInfo({ ...info, description: e.target.value })}
          placeholder='Search ie React'
        />
      </FormItem>
      <FormItem label='location'>
        <Input
          value={location}
          onChange={(e) => setInfo({ ...info, location: e.target.value })}
          placeholder='filter by region, country, state, city, etc '
        />
      </FormItem>

      <Checkbox onChange={() => setInfo({ ...info, fulltime: true })}>
        FullTime Only
      </Checkbox>
      <Checkbox onChange={() => setInfo({ ...info, remote: true })}>
        Remote
      </Checkbox>

      <Button
        type='primary'
        icon={<SearchOutlined />}
        onClick={() =>
          setInfo({
            ...info,
            query: `description=${description}&location=${location}&full_time=${fulltime}&remote=${remote}`,
          })
        }
      >
        Search
      </Button>
    </Form>
  )
}

export default FormComponent
