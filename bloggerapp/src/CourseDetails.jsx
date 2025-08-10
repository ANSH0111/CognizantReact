const courses = [
    { name: "Angular", date: "03/06/2025" },
    { name: "React", date: "03/08/2025" }
]

const CourseDetails = () => {
    return (

        <div className="course-details">
            <h2>Course Details</h2>
            {courses.map((course, index) => (
                <p key={index}> {course.name} - {course.date} </p>
            ))}
        </div>
    )
};

export default CourseDetails;