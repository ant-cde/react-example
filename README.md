# ANT + React

A very simple, yet complete example of how to use ANT in a React project. Be sure to install the primary dependencies `@antcde/connect-ts` and `@antcde/react-utils`. Follow these steps to get the most out of ANT ASAP: 

1. Run the project on a localhost
2. Go to 'os.alpha.antcde.io/developer/[port=5174]'. Whereby `port` is the port of the locally hosted app.
3. Use the `useAntClient` hook to get full access to ANT OS functionality. It is typed so easy to discover.
4. Use `useAntContext` hook to get access to the shared state of ANT OS. Know which license, project and/or task is selected and what the user's configuration is.
5. Use the `useAntToolbar` hook to control interactivity with the OS-toolbar. You can set your own icons and get access to an integrated search bar.
6. Discover the Signal API for sending and receiving messages from ANT OS. Use `antClient.signal.send({ /* your command here */)` to give commands to the OS like; open the notepad, close the overlay, or toggle immersive mode.


## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)
  uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check
out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information
on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

| TODO                              | DOING                | DONE                                    |
|-----------------------------------|----------------------|-----------------------------------------|
|                                   |                      | how was it with the query params again? |
|                                   | Add API call example |                                         |
| Comms: double subscriptions error |                      |                                         |
| Comms: unsubscription not working |                      |                                         |