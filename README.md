# TokenOS for Airtable - Installation

TokenOS is an Airtable extension that seamlessly integrates with Figma, allowing you to import and export design tokens.

[Documentation link](https://mart1design.notion.site/TokenOS-documentation-7afa36d2143f40c4a3ca927ab8991b3b?pvs=4)

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

2. Navigate to the project directory.

```bash
cd TokenOS
```

3. Install the required dependencies.

```bash
npm install
```

4. In Airtable, open the Extensions dashboard by clicking the “Extensions” button at the top-right of the screen. From there, click “Add an Extension,” and then “Build a custom extension.”

![](https://file.notion.so/f/s/eb25ceb3-8c26-4fb0-99be-11b34e5af95e/01-build-an-app.gif?id=ebdc91ae-7c46-48d1-9328-13703fa032e8&table=block&spaceId=68e05086-de84-4de9-8bd8-3b814fdbea53&expirationTimestamp=1690279200000&signature=iuYRc7R4AivaZMzbb7VlEYQaQ9uEHZc_ZQPykA8L4ig)

5. Enter a name for this extension by typing in the “Extension name” field. This name can be anything you want - but we recommend just using whatever the developer of the Extension has named it.

In the “Start from an example” box, select the “Remix from Github” option. Then, add the URL to the Github repository of the extension in the “Github repository field.” Then click “Create extension.”

![](https://file.notion.so/f/s/ed46e933-26e0-4066-9f14-6b135f192d52/02-remix-from-github.gif?id=11e7d112-e8bc-4c75-8cf7-d0bf9f4dbe6e&table=block&spaceId=68e05086-de84-4de9-8bd8-3b814fdbea53&expirationTimestamp=1690279200000&signature=7bT9hNL7BAdnxSu3POpfkMHZgESCph7ek5XpUGaPwIU)

6. Next, you’ll need to install the Blocks command-line tool - the tool that you’ll use to actually send the code for the extension to Airtable. If you've already installed the **`@airtable/blocks-cli`**, you can skip ahead. Otherwise, open your terminal and enter following command:

```bash
npm install -g @airtable/blocks-cli
```

This will download and install the Blocks CLI. When the command finishes running, click “Continue”.

Follow the instructions that come up on the next screen. If this is your first time using the Blocks CLI, you'll need to set-up your API key. Navigate to **https://airtable.com/account** and copy your API key to your clipboard, then set it using the CLI:

```bash
block set-api-key <YOUR_API_KEY>
```

7. Then, return to your base, and continue the steps shown on the screen by copying and pasting the commands into your terminal and pressing Enter to run them.

![](https://file.notion.so/f/s/a3eca020-0452-477a-aabc-a87e9ca352bf/03-block-init.gif?id=0351382e-e8f9-4edb-bdff-ea2d3766fc6e&table=block&spaceId=68e05086-de84-4de9-8bd8-3b814fdbea53&expirationTimestamp=1690279200000&signature=thFLEMDF3hM13Yf9fkoqEJYOMgw603YHRDIAczErB0M)

After running the **`block run`** command, click “Continue.”

Paste the URL that has been copied to your clipboard into the Block URL field, and click “Start editing extension.”

![](https://file.notion.so/f/s/d0750d91-b303-4638-a3f3-2ea742fb73b2/04-block-run.gif?id=3528c4a4-040b-4c4e-95bd-9c616e82b896&table=block&spaceId=68e05086-de84-4de9-8bd8-3b814fdbea53&expirationTimestamp=1690279200000&signature=BGwzEJ_2BzAXwWaMxqo72Jkk-0dw3Ak-YiakkgVrdio)

Now, you should see the extension that you have chosen running in the extensions panel in your Base. You can play around with the extension here, to make sure it does what you expect.

Currently, the extension is running from the code that is on your local computer. Next, we’ll actually deploy the extension to run natively inside of your Base on Airtable.
