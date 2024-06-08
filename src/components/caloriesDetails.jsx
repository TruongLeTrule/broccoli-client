import React, { useState, useEffect } from 'react';
import { getUserTarget } from '../apis/user';

const CaloriesDetails = ({ nutrients }) => {
  const [userTarget, setUserTarget] = useState([]);

  const fetchUserTarget = async () => {
    const { nutrients } = await getUserTarget();
    console.log(nutrients);
    setUserTarget(nutrients);
  };

  useEffect(() => {
    fetchUserTarget();
  }, []);

  const handleNutrients = (data) =>
    data.map(({ nutrientName, nutrientValue, nutrientId }) => ({
      name: nutrientName,
      value: nutrientValue,
      target:
        userTarget.find((target) => target.nutrientId === nutrientId)
          ?.targetNutrientValue || 0,
    }));

  if (!nutrients) {
    return <div>No meal data available</div>;
  }

  return (
    <div className="content-center">
      {handleNutrients(nutrients).map((data, i) => (
        <div key={i} className="grid grid-cols-3 gap-10 text-center">
          <div className="py-2 capitalize">{data.name}</div>
          <div className="py-2">{data.value.toFixed(0)}g</div>
          <div className="py-2">~{data.target}g</div>
        </div>
      ))}
    </div>
  );
};

export default CaloriesDetails;
