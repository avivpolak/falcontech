import "./App.css";
import AboutSection from "./components/AboutSection";
import MainSection from "./components/MainSection";
import Why from "./components/Why";
import Page from "./components/Page";

const contents = {
    whyImportant: {
        header: "Why is this important?",
        content:
            '"Construction is one of theworld’s largest sectors, so a profoundshift in the sector can have a majorimpact on global economic productivity and recent modular projects have already established a solid track record of accelerating project timelines by 20to 50 percent”',
    },
    feature1: {
        header: "Falcon Technology produce 95%",
        content:
            "of the building elements in afactory before being transportedto the building site",
    },
    feature2: {
        header: "Robotic Manufacturing Proprietary",
        content:
            "By 2023, 80% of Falcon’s plant production will beconducted by robots.",
    },
};
function App() {
    return (
        <div className="App">
            <MainSection />
            <AboutSection />
            <Why />
            <Page
                header={contents.whyImportant.header}
                content={contents.whyImportant.content}
            />
            <Page
                header={contents.feature1.header}
                content={contents.feature1.content}
            />
            <Page
                header={contents.feature2.header}
                content={contents.feature2.content}
            />
        </div>
    );
}

export default App;
