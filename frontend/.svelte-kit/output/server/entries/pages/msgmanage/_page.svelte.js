import { c as create_ssr_component, t as subscribe, v as validate_component, l as escape } from "../../../chunks/index.js";
import { w as writable } from "../../../chunks/index3.js";
import { B as Button_1 } from "../../../chunks/Button.js";
import { L as Label } from "../../../chunks/index4.js";
import { T as Textfield } from "../../../chunks/Textfield.js";
import { S as Snackbar } from "../../../chunks/Actions.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".Container.svelte-1clbhnq{width:300px;height:300px;margin:auto}.input.svelte-1clbhnq{margin-left:45px;margin-top:20px}.btnWrapper.svelte-1clbhnq{width:100%;height:35px;display:flex;justify-content:space-around;margin-top:20px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  let snackbar;
  let message;
  let { user = writable({
    id: 0,
    username: "\u672A\u767B\u5F55",
    gender: "\u7537",
    age: 18,
    phone: "18401111111"
  }) } = $$props;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"Container svelte-1clbhnq"}"><div class="${"input svelte-1clbhnq"}">${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        variant: "outlined",
        label: "username",
        value: $user.username
      },
      {
        value: ($$value) => {
          $user.username = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
    <div class="${"input svelte-1clbhnq"}">${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        variant: "outlined",
        label: "gender",
        value: $user.gender
      },
      {
        value: ($$value) => {
          $user.gender = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
    <div class="${"input svelte-1clbhnq"}">${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        variant: "outlined",
        label: "age",
        value: $user.age
      },
      {
        value: ($$value) => {
          $user.age = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
    <div class="${"input svelte-1clbhnq"}">${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        variant: "outlined",
        label: "phone",
        value: $user.phone
      },
      {
        value: ($$value) => {
          $user.phone = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
    <div class="${"btnWrapper svelte-1clbhnq"}">${validate_component(Button_1, "Button").$$render($$result, { variant: "raised" }, {}, {
      default: () => {
        return `update`;
      }
    })}</div>
    ${validate_component(Snackbar, "Snackbar").$$render(
      $$result,
      { class: "demo-success", this: snackbar },
      {
        this: ($$value) => {
          snackbar = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
            default: () => {
              return `${escape(message)}`;
            }
          })}`;
        }
      }
    )}
</div>`;
  } while (!$$settled);
  $$unsubscribe_user();
  return $$rendered;
});
export {
  Page as default
};
