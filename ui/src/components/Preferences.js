
import React, { useState, useContext, useEffect } from "react";
import { SelectButton } from 'primereact/selectbutton';
import { ActivitiesContext } from '../DestinationPage';
import './preferences.css'

const Preferences = ({ destination }) => {
  const {activities, setFilteredActivities} = useContext(ActivitiesContext);
  const [selectedPreferences, setSelectedPreferences] = useState([]);
    

    const items = [
        { name: 'Mountain', value: 'mountain' },
        { name: 'Forest', value: 'forest' },
        { name: 'Countryside', value: 'countryside' },
        { name: 'Suburbia', value: 'suburbia' },
        { name: 'Meal', value: 'meal' },
        { name: 'Entertainment', value: 'entertainment' },
        { name: 'Social', value: 'social' },
        { name: 'Before_sunrise', value: 'before_sunrise' },
        { name: 'Late_morning', value: 'late_morning' },
        { name: 'Noon', value: 'noon' },
        { name: 'Afternoon', value: 'afternoon' },
        { name: 'Evening', value: 'evening' },
        { name: 'Night', value: 'night' }
    ];

    useEffect(() => {
      filterActivities();
    }, [selectedPreferences, activities]);
  
    const filterActivities = () => {
      if (selectedPreferences.length === 0) {
        setFilteredActivities(activities);
      } else {
        const filtered = activities.filter(activity => {
          return selectedPreferences.some(pref =>{
            // console.log("pref value:     " + pref + "      activity of pref value:   "+ activity[pref] );
            // console.log("selected true :" + activity[pref])
            return activity[pref]
          }
          )
        }
        );
        setFilteredActivities(filtered);
      }
    };
  
    return (
      <div className="preferences-container">
        <h2> Filter Activities </h2>
        <div className="select-button-container">
        <SelectButton 
          value={selectedPreferences} 
          onChange={(e) => setSelectedPreferences(e.value)} 
          optionLabel="name" 
          options={items} 
          multiple 
          className="custom-select-button"
        />
        </div>
      </div>
    );
  }

export default Preferences;