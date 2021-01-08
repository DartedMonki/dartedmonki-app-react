import { useCallback, useState } from 'react'

function useCustom() {
  const [record, setRecord] = useState(false)

  const handleStartRecording = useCallback(() => {
    setRecord(true)
  }, [])

  const handleStopRecording = useCallback(() => {
    setRecord(false)
  }, [])

  const handleOnRecording = useCallback(() => {}, [])
  const handleOnStop = useCallback(() => {}, [])

  return {
    state: {
      record,
    },
    handler: {
      handleStartRecording,
      handleStopRecording,
      handleOnRecording,
      handleOnStop,
    },
  }
}

export default useCustom
