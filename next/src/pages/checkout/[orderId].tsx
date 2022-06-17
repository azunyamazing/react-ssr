import Head from "next/head"
import type { GetServerSideProps, NextPage } from "next"
import { useEffect } from "react"
import { getData, GetDataResult } from "../../server";
import { initModel } from "../../model";
import { Time } from "../../components/time";

const CheckoutPage: NextPage<GetDataResult> = (props) => {
  initModel(props);

  useEffect(() => {

    console.log('page render')
  }, []);

  return (
    <>
      <Head>
        <title>checkout</title>
      </Head>
      <Time />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<GetDataResult> = async (ctx) => {

  const { req, res, params, query } = ctx;

  res.setHeader('x-nono', 'nono')


  const data = await getData();


  // console.log(params, query)

  return {
    props: data
  }
}

export default CheckoutPage;

