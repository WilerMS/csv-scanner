import { useState } from 'react'
import FileUploader from './components/FileUploader'

const App = () => {
  const [data, setData] = useState([])

  const handleUploadFile = (file: File) => {
    const formData = new FormData()
    formData.append('file', file)

    console.log(file)
  }

  return (
    <div className="w-full h-screen bg-[#40434a] flex items-center justify-center">

      <FileUploader onSelectFile={handleUploadFile} />

      <div className="bg-primary-700 rounded-xl shadow-2xl glassmorfism">

      </div>
    </div>
  )
}

export default App
