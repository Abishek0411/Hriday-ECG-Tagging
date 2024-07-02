# ECG Analysis App

This is a React Native application that provides a simple and user-friendly interface to upload or take a photo of an ECG chart. The app sends the ECG image to a server for processing using a machine learning model. It then displays whether the ECG is predicted as healthy or unhealthy, and provides information on nearby cardiologists for consultation if required.

## Getting Started

Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till the "Creating a new application" step before proceeding.

### Step 1: Install Dependencies

Before starting the Metro Server and running your application, you need to install the necessary dependencies. Run the following command from the root of your React Native project:

```bash
# using npm
npm install

# OR using Yarn
yarn
```

This will install all the required packages listed in the `package.json` file.

### Step 2: Start the Metro Server

After installing dependencies, start **Metro**, the JavaScript bundler that ships with React Native. Run the following command from the root of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

### Step 3: Start your Application

Keep Metro Bundler running in its own terminal. Open a new terminal from the root of your React Native project and run the following command to start your Android or iOS app:

#### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

#### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If set up correctly, your app should start running on your Android Emulator or iOS Simulator shortly.

### Step 4: Modifying your App

Once the app is running, you can modify it:

1. Open `App.tsx` (or `App.js` if using JavaScript) in your text editor of choice and make changes.
2. For Android: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> on Windows and Linux, or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> on macOS) to see your changes.
3. For iOS: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes.

## Using the ECG Analysis Feature

1. **Upload/Take Photo**: Use the app to either upload an existing ECG chart photo from your device's gallery or take a new photo using the camera.
2. **Processing**: The app sends the ECG image to our server for processing using a machine learning model.
3. **Result**: Once processed, the app displays whether the ECG is predicted as healthy or unhealthy.
4. **Consultation**: If the ECG result indicates a potential issue, the app provides information on nearby cardiologists for consultation.

## Congratulations! 🎉

You've successfully run and used the ECG Analysis App! For more advanced integration or customization, refer to the following resources:

- [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps) for adding React Native code to an existing application.
- Explore more about [React Native](https://reactnative.dev/docs/getting-started) for comprehensive guides and tutorials.

# Troubleshooting

If you encounter any issues, refer to the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page or community forums for assistance.

# Learn More

Explore additional resources to learn more about React Native:

- [React Native Website](https://reactnative.dev) for in-depth information about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) for an overview and setup guide.
- [React Native Blog](https://reactnative.dev/blog) for the latest updates and news.
- [GitHub Repository](https://github.com/facebook/react-native) for the React Native source code.
