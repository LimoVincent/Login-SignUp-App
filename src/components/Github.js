import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from 'antd'
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'

function Github({ info, setInfo }) {
  const [more, setMore] = useState(true)
  const { data, query } = info

  const Fetchdata = async () => {
    axios.get(query).then((response) => {
      setInfo(...info, { data: response.data })
    }, [])
  }

  useEffect(() => {
    Fetchdata()
    console.table(data)
  })
  return (
    <div>
      <h1>Github jobs</h1>

      <div className='job-container'>
        {data.map(
          ({
            id,
            type,
            url,
            created_at,
            company,
            company_url,
            location,
            title,
            description,
          }) => (
            <Card
              title={title}
              style={{ width: 700, margin: 20 }}
              key={id}
              className='job'
            >
              <h5>
                <a href={url}>{title}</a>
              </h5>
              <h7>{type}</h7>
              <p>
                <strong>{created_at}</strong>
              </p>
              <p>
                <strong>{location}</strong>
              </p>
              <p>
                <a href={company_url}>{company}</a>
              </p>
              <span>
                {more ? description : description.slice(0, 200)}{' '}
                <button onClick={() => setMore(!more)}>
                  {more ? 'more...' : 'less'}
                </button>
              </span>
            </Card>
          )
        )}
      </div>
    </div>
  )
}

export default Github
