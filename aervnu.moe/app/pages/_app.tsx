import React from 'react';
import { useRouter } from 'next/router';
import NotFound from './not-found';
import { NextPage, GetStaticProps } from 'next/types';
function notfound({ Component, pageProps }: { Component: NextPage; pageProps: GetStaticProps }) {
  const router = useRouter();

  return (
    <>
      {router.pathname === '/404' ? (
        <NotFound />
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default notfound;