const BASE_URL = 'http://localhost:5500';

export async function loadRecipes(query: Object, options: Object): Promise<any> {
  const url = `${BASE_URL}/loadRecipes`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"query": query, "options": options}),
    });
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return []
  }
}

export async function removeRecipe(_id: string) {
  console.log(_id)
  const url = `${BASE_URL}/removeRecipe`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: _id,
    });
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    
    const data = await response.text();
    console.log(data)
    return data;
  } catch (error) {
    console.error('Error:', error);
    return []
  }
}