import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { Vector3 } from 'three';

import VRMAsset from '../components/VRMAsset';
import Controls from '../utils/Controls';

const App: React.FC = () => {


    return (
        <Canvas>
            <Controls defaultCameraPosition={[0, 1.25, 1]} target={new Vector3(0, 1, 0)} />
            <Suspense fallback={null}>
                {/* publicから見て対象ファイルのパス */}
                <VRMAsset url='./zunko_vrm.vrm' />
            </Suspense>
            <directionalLight/>
        </Canvas>
    );
}

export default App;
