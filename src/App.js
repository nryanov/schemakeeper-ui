import React from 'react';
import SubjectsContainer from "./schema-registry/components/SubjectsContainer";
import SubjectCardContainer from "./schema-registry/components/SubjectCardContainer";
import AlertContainer from "./schema-registry/components/Alert";
import Header from "./schema-registry/components/Header";

const App = () => (
    <div className="container-fluid">
        <Header/>
        <AlertContainer/>
        <div className="row mt-4">
            <div className='col-4'>
                <SubjectsContainer/>
            </div>
            <div className='col-8'>
                <SubjectCardContainer/>
            </div>
        </div>
    </div>
);

export default App;
