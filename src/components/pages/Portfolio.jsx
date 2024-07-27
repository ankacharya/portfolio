import React, { useState } from "react"
import { Heading } from "../common/Heading"
import { portfolio } from "../data/dummydata"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"


export const Portfolio = () => {
  const [list,] = useState(portfolio);

  return (
    <>
      <article>
        <div className='container'>
          <Heading title='Portfolio' />
          <div className='content grid3'>
            {list.map((item, index) => (
              <div className='box' data-aos='fade-up' key={index}>
                <div className='img'>
                  <img src={item.cover} alt={item.title}/>
                </div>
                <div className='overlay'>
                  <h3>{item.title}</h3>
                  <span>{item.name}</span>
                  <a
                  href={item.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='link'
                  >            
                  <VisibilityOutlinedIcon />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  )
}
