import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Start from './start/index'
import { Dashboard } from './start/Dashboard';
import PlaceDetail from './start/PlaceDetail';

export default function App() {
  return (
    <>
    <SafeAreaProvider>
    <Router>
      <Stack key="root">
        <Scene key="dashboard" component={Dashboard}  hideNavBar={true}/>
        <Scene key="start" component={Start}  initial hideNavBar={true} />
        <Scene key="placedetail" component={PlaceDetail} hideNavBar={true} />
      </Stack>
    </Router>
    </SafeAreaProvider>
    </>
  );
}