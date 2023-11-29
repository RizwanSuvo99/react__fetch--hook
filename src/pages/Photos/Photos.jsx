/* eslint-disable react/prop-types */
import Photo from "../../components/Photo/Photo";
import "./Photos.css";

export default function Photos({ photosData, photosError }) {
  photosData.length = 18;
  return (
    <div className="photos">
      <div className="photos__heading">
        <h1>Gallery</h1>
      </div>
      <div className="photos__content">
        {photosError ? (
          <h1 className="error">{photosError}</h1>
        ) : (
          photosData.map(
            (photo) => (
              console.log(photo), (<Photo key={photo.id} photo={photo} />)
            )
          )
        )}
      </div>
    </div>
  );
}
