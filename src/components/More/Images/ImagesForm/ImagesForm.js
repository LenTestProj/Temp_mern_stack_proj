import React from 'react'
import classes from './ImagesForm.module.css';

const UploadImage=()=>{
   
    const getImageFileName=(event)=>{
        console.log(event);
    }

    return <div className={classes.content}>
        <div className={classes.firstHalf}>
          <div className={classes.inputSection}>
            <p>Select File:</p>
            <input type='file' className={classes.input} onChange={getImageFileName}/>
          </div>
          <div className={classes.inputSection+' pt-2 sm:pt-0'}>
            <p>File Name:</p>
            <input type='text' className={classes.input+' sm:pr-9 '+classes.textInput} readOnly/>
          </div>
          <div className={classes.inputSection+' '+classes.buttonSection}>
          <button className={classes.button}>Upload</button>
          </div>
        </div>
        <div>
            <p>List Of Images</p>
        </div>
    </div>
}

const ImagesForm = () => {
  return (
    <div className={classes.main}>
      <form className={classes.form}>
     <UploadImage />
    </form>
    </div>
  )
}

export default ImagesForm
