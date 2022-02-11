import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const express = require('express');
const apiMocker = require('connect-api-mocker');
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors({ origin: true, credentials: true }));

app.use('/api', apiMocker('api'));

app.listen(port, () => console.log(`Server listening on port ${port}!`));

export default function Home() {
  return (
    <div></div>
  )
}
