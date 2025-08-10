import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";
import BookDetails from "./BookDetails";
import "./App.css";

const App = () => {
    return (
        <div className="container">
            <CourseDetails />
            <BookDetails />
            <BlogDetails />
        </div>
    );
};

export default App;