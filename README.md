## remotion-tailwind-v3-test

A reproducible example of how Remotion works with Tailwind v3.

There is an issue currently, the styles are not always updated.

  - https://github.com/remotion-dev/remotion/issues/737#issuecomment-1007553694
  - https://github.com/tailwindlabs/tailwindcss/discussions/6963

## Steps

- `yarn install`
- `yarn start`
- Open `HelloWorld.tsx` and change the container's class to a not used class, e.g:
  - `bg-red-100`, `bg-purple-800`, etc
- Save the file
- The preview may or may not update correctly
  - Usually, the first change works fine
- If it did, try changing the className and saving the file again
- If it didn't open `tailwind.config.js` and save it
  - The preview should update as expected

If you `yarn install tailwindcss@2` and `yarn start` again, the preview should update as expected.
