import { useState } from 'react'

export function WorkoutPage() {
  const [pushupCount, setPushupCount] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const incrementPushups = () => {
    setPushupCount(prev => prev + 1)
  }

  const decrementPushups = () => {
    setPushupCount(prev => Math.max(0, prev - 1))
  }

  const handlePushupInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10)
    if (!isNaN(value) && value >= 0) {
      setPushupCount(value)
    }
  }

  const submitWorkout = () => {
    setIsSubmitted(true)
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setPushupCount(0)
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1>Workout Completed! 🎉</h1>
        <p style={{ fontSize: '1.5rem', color: 'green' }}>
          Great job! You completed {pushupCount} pushups.
        </p>
        <p>Starting a new workout in a few seconds...</p>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '2rem' }}>
      <h1>Workout Page</h1>
      <p>Track your pushup workout!</p>
      
      <div style={{ margin: '2rem 0', textAlign: 'center' }}>
        <h2>Pushup Counter</h2>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: '1rem',
          margin: '1rem 0'
        }}>
          <button
            onClick={decrementPushups}
            style={{
              padding: '1rem',
              fontSize: '1.5rem',
              backgroundColor: '#ff6b6b',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              width: '50px',
              height: '50px'
            }}
          >
            -
          </button>
          
          <input
            type="number"
            value={pushupCount}
            onChange={handlePushupInputChange}
            min="0"
            style={{
              padding: '0.5rem',
              fontSize: '2rem',
              textAlign: 'center',
              width: '100px',
              border: '2px solid #ccc',
              borderRadius: '5px'
            }}
          />
          
          <button
            onClick={incrementPushups}
            style={{
              padding: '1rem',
              fontSize: '1.5rem',
              backgroundColor: '#51cf66',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              width: '50px',
              height: '50px'
            }}
          >
            +
          </button>
        </div>
        
        <div style={{ margin: '2rem 0' }}>
          <p style={{ fontSize: '1.2rem' }}>Current Count: <strong>{pushupCount}</strong></p>
        </div>
        
        <button
          onClick={submitWorkout}
          disabled={pushupCount === 0}
          style={{
            padding: '1rem 2rem',
            fontSize: '1.2rem',
            backgroundColor: pushupCount === 0 ? '#ccc' : '#4285f4',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: pushupCount === 0 ? 'not-allowed' : 'pointer',
            marginTop: '1rem'
          }}
        >
          Submit Workout
        </button>
      </div>
    </div>
  )
}