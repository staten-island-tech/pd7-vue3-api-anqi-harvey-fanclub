const getSquirrels = async () => {
  try {
    const res = await fetch(`https://data.cityofnewyork.us/resource/vfnx-vebw.json`)
    const data = await res.json()
    return data
  } catch (error) {
    console.log('ERROR')
  }
}

getSquirrels()

export const options = {
  responsive: true,
  maintainAspectRatio: false
}

export { data }
