import React from 'react';
import { Link } from 'react-router-dom';
import Projects from '../components/Projects';

const Landingpage = () => {
  return (
    <section className="bg-[248,250,253] w-full sm:w-[550px] mx-auto mt-16 px-4">
      <h1 className="font-semibold text-4xl mb-4 text-slate-950 text-center sm:text-left">
        Hallo, I’m Vivek.
        <span className="block text-slate-500 font-normal text-2xl selection:bg-yellow-300 selection:text-black">
          A Web and Data Science Student in Germany.
        </span>
      </h1>

      <p className="text-slate-700 text-lg sm:text-xl leading-normal text-center sm:text-left">
        Driven by data, I want to build solutions that matter. I've worked on a wide range of projects – some I've contributed to, others I've led.
        Now, as I pursue a Masters, I'm looking to translate my learning into real world impact.
      </p>

      <Link
        to="/info"
        className="group bg-slate-950 hover:bg-slate-800 transition-colors inline-block mt-8 font-mono text-xs font-semibold rounded-full px-8 py-3 !text-white"
      >
        More Information{' '}
        <span className="inline-block group-hover:translate-x-2 transition-transform">
          →
        </span>
      </Link>

      <hr className="my-4 mt-10 border-t-2 border-gray-300" />

      <h2 className="mt-12 mb-4 font-semibold text-2xl">
        Personal Projects
      </h2>

      <p className="text-slate-700 text-lg">
        Below is a selection of recent projects that I&apos;ve worked on.
      </p>


      <Projects/>
    </section>
  );
};

export default Landingpage;
