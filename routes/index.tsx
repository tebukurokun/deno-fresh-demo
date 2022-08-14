/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <Counter start={3} />
      <div class={tw`mt-5`}>
        <p>Pages</p>
        <ul class={tw`list-disc`}>
          <li>
            <a href="/about">about</a>
          </li>
          <li>
            <a href="/search">search</a>
          </li>
          <li>
            <a href="/countdown">countdown</a>
          </li>
          <li>
            <a href="/lemon">lemon</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
