
    <div className='container-identity-form'>
      <form onSubmit={formik.handleSubmit}>
        <div className='formik-fields'>
          <label>Player name</label>
          <input 
            type='text' { ...formik.getFieldProps('playerName') }
          />
          {formik.touched.playerName && formik.errors.playerName ? 
            <div className='formik-errors'>{formik.errors.playerName}</div> :
              null}
        </div>
        <div className='formik-fields'>
          <label>Character name</label>
          <input 
            type='text' { ...formik.getFieldProps('characterName') }
          />
          {formik.touched.characterName && formik.errors.characterName ? 
            <div className='formik-errors'>{formik.errors.characterName}</div> :
              null}
        </div>
        <div className='formik-fields'>
          <label>Race</label>
          <input 
            type='text' { ...formik.getFieldProps('race') }
          />
          {formik.touched.race && formik.errors.race ? 
            <div className='formik-errors'>{formik.errors.race}</div> :
              null}
        </div>
        <div className='formik-fields'>
          <label>Background</label>
          <input 
            type='text' { ...formik.getFieldProps('background') }
          />
          {formik.touched.background && formik.errors.background ? 
            <div className='formik-errors'>{formik.errors.background}</div> :
              null}
        </div>
        <div className='formik-fields'>
          <label>Class</label>
          <input 
            type='text' { ...formik.getFieldProps('class') }
          />
          {formik.touched.class && formik.errors.class ? 
            <div className='formik-errors'>{formik.errors.class}</div> :
              null}
        </div>
        <div className='formik-fields'>
          <label>Level</label>
          <input 
            type='number' 
            { ...formik.getFieldProps('level') }
          />
          {formik.touched.level && formik.errors.level ? 
            <div className='formik-errors'>{formik.errors.level}</div> :
              null}
        </div>
        <div className='formik-fields'>
          <label>Alignment</label>
          <input 
            type='text' { ...formik.getFieldProps('alignment') }
          />
          {formik.errors.alignment ? 
            <div className='formik-errors'>{formik.errors.alignment}</div> :
              null}
        </div>
        <div className='formik-fields'>
          <label>Experience</label>
          <input 
            type='text' { ...formik.getFieldProps('experience') }
          />
          {formik.touched.experience && formik.errors.experience ? 
            <div className='formik-errors'>{formik.errors.experience}</div> :
              null}
        </div>
        <button type='submit'>Send</button>
      </form>
    </div> 
