import React from "react"

const MicrosoftIdentityAssociation = () => {
  const jsonData = {
    "someKey": "someValue"
  }

  return (
    <pre>{JSON.stringify({
  "associatedApplications": [
    {
      "applicationId": "9ae73e4a-f4e8-4ab1-94e8-8d8e76440048"
    }
  ]
}, null, 2)}</pre>
  )
}

export default MicrosoftIdentityAssociation
