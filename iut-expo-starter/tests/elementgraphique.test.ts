// import React from 'react';
// import {expect} from '@jest/globals';
// import {Provider} from "react-redux";
// import {configureStore} from "@reduxjs/toolkit";
// import {fireEvent, render, screen} from '@testing-library/react-native'
// import '@testing-library/jest-native/extend-expect';
// import testReducer from "./testReducer";



// jest.useFakeTimers();
// const store = configureStore({
//     reducer: {
//         appReducer: testReducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: false
//         })
// });
// const Wrapper = ({children}) => (<Provider store={store}>{children}</Provider>);
// describe('<NounoursListItem />', () => {
//     test('Assert displayed values', () => {
//         const expectedNounoursInfos = store.getState().appReducer.nounours[0];
//         render(<Wrapper>
//             <NounoursListItem item={expectedNounoursInfos}/>
//         </Wrapper>)
//         expect(screen.getByTestId('nounours-name')).toHaveTextContent(expectedNounoursInfos.name)
//         expect(screen.getByTestId('nounours-nbPoils')).toHaveTextContent(expectedNounoursInfos.nbPoils)
//         expect(screen.getByTestId('nounours-age')).toHaveTextContent(expectedNounoursInfos.age)
//         expect(screen.getByTestId("nounours-image")).toHaveProp("source", {uri: expectedNounoursInfos.image})
//         let nounoursListSize = store.getState().appReducer.nounours.length;
//         fireEvent.press(screen.getByTestId("remove-button"))
//         expect(store.getState().appReducer.nounours.length).toBe(nounoursListSize - 1)
//     })
// });