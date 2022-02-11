import styles from '../styles/Home.module.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

export async function getStaticProps() {
  const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=759e880cfc193ac85da97b051161fb98`)

  return {
    props: {
      weatherInfos: response.data
    }
  }
}

export default function Home({ weatherInfos }) {
  console.log(weatherInfos)
  return (
    <div className={styles.container}>
      <label>City: </label>
      <input type='text' />
      <h1>{weatherInfos.name}</h1>
      <p>Weather: {weatherInfos.weather[0].description}</p>
      <p>Temperature: {weatherInfos.main.temp - 273.15}°C</p>
    </div>
  )
}
