# Bunker Plugin Template

This is an template repository to show how Bunker plugins work and how to make your own. The UI is defined using React components, so anything that can be built with those can be used as a Bunker plugin.

Rollup is used to bundle the entire plugin into a JavaScript file that can be uploaded to Github and shared with users.

You can separate your plugin into multiple files, as long as the root is the function inside `index.tsx`.

> [!NOTE]
> Plugin typings for TypeScript will be released soon. When that happens, TypeScript will be encouraged so you can make sure your plugin will be compatible with Bunker.

## How to run
1. Fork this repository (and install packages)
2. Make your changes
3. Run `npm run build` to bundle the plugin
4. Upload the plugin file from `dist/bundle.js` to Github or another file host

> [!NOTE]
> The Content-Type header does __not__ have to be `text/javascript` for Bunker to import it. This allows for compatibility with raw.githubusercontent.com and other hosts that would otherwise serve it as `text/plain`.

5. Share the raw file data url with users for them to add inside their Bunker application.

Please note that any external plugins that users add will be marked as **Unverified**, and are given a warning that they may be malicious. If you would like this to be removed and added to our verified plugin registry, please make a pull request in our plugin registry. We will review it, check for malicious code, and if it passes, approve it. 
If you experience problems with creating plugins, or an issue with this template, please join our [Discord server](https://discord.gg/Yq32gmhS2u) or open an issue and we'd be glad to help you. 


Happy developing!