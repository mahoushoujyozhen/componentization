import { c as create_ssr_component } from "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "span.svelte-18syu11.svelte-18syu11{display:inline-flex;justify-content:center;align-items:center;font-size:0.8em;width:2.4em;height:2.4em;background-color:white;box-sizing:border-box;border-radius:2px;border-width:2px;color:rgba(0, 0, 0, 0.7)}.missing.svelte-18syu11.svelte-18syu11{background:rgba(255, 255, 255, 0.5);color:rgba(0, 0, 0, 0.5)}.close.svelte-18syu11.svelte-18syu11{border-style:solid;border-color:var(--color-theme-2)}.exact.svelte-18syu11.svelte-18syu11{background:var(--color-theme-2);color:white}.example.svelte-18syu11.svelte-18syu11{display:flex;justify-content:start;margin:1rem 0;gap:0.2rem}.example.svelte-18syu11 span.svelte-18syu11{font-size:1.4rem}p.svelte-18syu11 span.svelte-18syu11{position:relative;border-width:1px;border-radius:1px;font-size:0.4em;transform:scale(2) translate(0, -10%);margin:0 1em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"text-column"}"><h1>How to play Sverdle</h1>

	<p>Sverdle is a clone of <a href="${"https://www.nytimes.com/games/wordle/index.html"}">Wordle</a>, the
		word guessing game. To play, enter a five-letter English word. For example:
	</p>

	<div class="${"example svelte-18syu11"}"><span class="${"close svelte-18syu11"}">r</span>
		<span class="${"missing svelte-18syu11"}">i</span>
		<span class="${"close svelte-18syu11"}">t</span>
		<span class="${"missing svelte-18syu11"}">z</span>
		<span class="${"exact svelte-18syu11"}">y</span></div>

	<p class="${"svelte-18syu11"}">The <span class="${"exact svelte-18syu11"}">y</span> is in the right place. <span class="${"close svelte-18syu11"}">r</span> and
		<span class="${"close svelte-18syu11"}">t</span>
		are the right letters, but in the wrong place. The other letters are wrong, and can be discarded.
		Let&#39;s make another guess:
	</p>

	<div class="${"example svelte-18syu11"}"><span class="${"exact svelte-18syu11"}">p</span>
		<span class="${"exact svelte-18syu11"}">a</span>
		<span class="${"exact svelte-18syu11"}">r</span>
		<span class="${"exact svelte-18syu11"}">t</span>
		<span class="${"exact svelte-18syu11"}">y</span></div>

	<p>This time we guessed right! You have <strong>six</strong> guesses to get the word.</p>

	<p>Unlike the original Wordle, Sverdle runs on the server instead of in the browser, making it
		impossible to cheat. It uses <code>&lt;form&gt;</code> and cookies to submit data, meaning you can
		even play with JavaScript disabled!
	</p>
</div>`;
});
export {
  Page as default
};
