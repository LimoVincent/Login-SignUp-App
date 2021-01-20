import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from 'antd'
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'

function Github({ info, setInfo }) {
  const [dataset, setDataset] = useState(null)
  const { data, query } = info

  const Fetchdata = async () => {
    axios.get(query).then(
      (response) => {
        setDataset(() => response.data, [])
      },
      [query]
    )
  }

  useEffect(() => {
    Fetchdata()
    console.table(dataset)
  })
  return (
    <div>
      <h1>Github jobs</h1>

      <div className='job-container'>
        {dataset.map(
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
              extra={<a href='#'>More</a>}
              style={{ width: 700, margin: 20}}
              key={id}
              className='job'
            >
              <a href={url}>
                <h4>{title}</h4>
              </a>
              <h6>{type}</h6>

              <p>
                <strong>{created_at}</strong>
              </p>
              <p>
                <strong>{location}</strong>
              </p>

              <p>
                <a href={company_url}>{company}</a>
              </p>
              {description.slice(0, 200)}
            </Card>
          )
        )}
      </div>
    </div>
  )
}

export default Github
