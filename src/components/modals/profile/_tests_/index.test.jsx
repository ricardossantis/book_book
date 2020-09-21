// import React from "react";
// import { mount, configure } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// import renderer from "react-test-renderer";
// import Feedback from "../../feedback";
// import Provider from "react-redux";
// import configureMockStore from "redux-mock-store";

// configure({ adapter: new Adapter() });
// const mockStore = configureMockStore([]);

// describe("Test Feedback", () => {
//   const setState = jest.fn();
//   const useStateSpy = jest.spyOn(React, "useState");
//   const store = mockStore("initialState");
//   useStateSpy.mockImplementation((init) => [init, setState]);
//   const wrapper = mount(
//     <Provider store={store}>
//       <Feedback setModal={useStateSpy} />
//     </Provider>
//   );

//   describe("Button setsModal", () => {
//     it("setsModal to false", () => {
//       wrapper.find("button").at(0).simulate("click");
//       expect(setState).toHaveBeenCalledWith(false);
//       expect(setState).toHaveBeenCalled();
//     });
//   });
// });
