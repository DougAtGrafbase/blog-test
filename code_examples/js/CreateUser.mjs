fetch("https://products-main-dougs-awesome.grafbase.app/graphql", {
  method: "POST",
  headers: {
    "content-type": "application/json",
    "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTQ3MTExMjcsImlzcyI6ImdyYWZiYXNlIiwiYXVkIjoiMDFHNTI3RzMwQ0hHQkU4WFJHNFAzNjVaWkUiLCJqdGkiOiIwMUc1MjdHMzBDQUdTRldZMzVLSkVFSzgyWiIsImVudiI6InByb2R1Y3Rpb24iLCJwdXJwb3NlIjoicHJvamVjdC1hcGkta2V5In0.p_K4RA3S3BN_1TineTMgqY8X6BfGydguGuzrnZhzoVE"
  },
  body: JSON.stringify({
    query: `CODE`
  })
}).then(async (data) => {
  console.log(await data.json())
})