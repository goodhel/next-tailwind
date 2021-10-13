import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ContainerBlock from '../components/ContainerBlock';
import Hero from '../components/Hero';
import FavoriteProject from '../components/FavoriteProject';
import LastestCode from '../components/LastestCode';
import getLatestRepos from '../services/getLatestRepo';
import userData from '../constant/data';

export default function Home({repositories}) {
  return (
    <ContainerBlock
      title="Yudhi Kusuma - Back End Developer"
      description="Building a template with Next.js and Tailwindcss"
    >
      <Hero></Hero>
      <FavoriteProject></FavoriteProject>
      <LastestCode repositories={repositories}></LastestCode>
    </ContainerBlock>
  )
}

export const getServerSideProps = async () => {
  // console.log(process.env.GITHUB_AUTH_TOKEN);
  // let token = process.env.GITHUB_AUTH_TOKEN;

  // const repositories = await getLatestRepos(userData, token);
  const repositories = await getLatestRepos(userData);

  return {
    props: {
      repositories,
    },
  };
};
