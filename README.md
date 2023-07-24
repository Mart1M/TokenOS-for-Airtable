TokenOS is an Airtable extension that seamlessly integrates with Figma, allowing you to import and export design tokens.

### **Prerequisites**

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of npm and Node.js.
- You have a Windows/Mac/Linux machine.
- You have an Airtable account.

### **Installing TokenOS**

To install TokenOS, follow these steps:

1. Clone the repository to your local machine using **`git clone`**.

```bash
git clone <repository-url>
```

1. Navigate to the project directory.

```bash
cd TokenOS
```

1. Install the required dependencies.

```bash
npm install
```

1. In Airtable, open the Extensions dashboard by clicking the “Extensions” button at the top-right of the screen. From there, click “Add an Extension,” and then “Build a custom extension.”

![01-build-an-app.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/eb25ceb3-8c26-4fb0-99be-11b34e5af95e/01-build-an-app.gif)

Enter a name for this extension by typing in the “Extension name” field. This name can be anything you want - but we recommend just using whatever the developer of the Extension has named it.

In the “Start from an example” box, select the “Remix from Github” option. Then, add the URL to the Github repository of the extension in the “Github repository field.” Then click “Create extension.”

![02-remix-from-github.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ed46e933-26e0-4066-9f14-6b135f192d52/02-remix-from-github.gif)

Next, you’ll need to install the Blocks command-line tool - the tool that you’ll use to actually send the code for the extension to Airtable. If you've already installed the **`@airtable/blocks-cli`**, you can skip ahead. Otherwise, open your terminal and enter following command:

```bash
npm install -g @airtable/blocks-cli
```

This will download and install the Blocks CLI. When the command finishes running, click “Continue”.

Follow the instructions that come up on the next screen. If this is your first time using the Blocks CLI, you'll need to set-up your API key. Navigate to **https://airtable.com/account** and copy your API key to your clipboard, then set it using the CLI:

```bash
block set-api-key <YOUR_API_KEY>
```

Then, return to your base, and continue the steps shown on the screen by copying and pasting the commands into your terminal and pressing Enter to run them.

![03-block-init.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a3eca020-0452-477a-aabc-a87e9ca352bf/03-block-init.gif)

After running the **`block run`** command, click “Continue.”

Paste the URL that has been copied to your clipboard into the Block URL field, and click “Start editing extension.”

![04-block-run.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d0750d91-b303-4638-a3f3-2ea742fb73b2/04-block-run.gif)

Now, you should see the extension that you have chosen running in the extensions panel in your Base. You can play around with the extension here, to make sure it does what you expect.

Currently, the extension is running from the code that is on your local computer. Next, we’ll actually deploy the extension to run natively inside of your Base on Airtable.
