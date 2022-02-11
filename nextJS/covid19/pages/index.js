import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'

export async function getStaticProps() {
  const response = await axios.get('https://static.pipezero.com/covid/data.json');

  return {
    props: {
      covidInfo: response.data.locations[0]
    }
  }
}

export default function Home({ covidInfo }) {
  console.log(covidInfo);
  return (
    <div>
      <h2>Covid 19 info</h2>
      {Object.keys(covidInfo).map((key) => (
        <p key={key}>{`${key}: ${covidInfo[key]}`}</p>
      ))}
    </div>
  )
}
