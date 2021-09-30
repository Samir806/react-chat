import React from "react";
import "./profilInfo.css";


const ProfilInfo = (props) => {
 
  if (!props.profile) {
    return <div>No data</div>;
  }


  return (
    <div className="profilInfo">
      <div>
        <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" />
      </div>

      <div className="profIn">
        
        <img src={props.profile.photos.small} />
        
        <div>Avatar + description</div>
      </div>
    </div>
  );
};

export default ProfilInfo;
