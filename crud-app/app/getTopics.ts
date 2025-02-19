export interface Topic {
  id: string;
  title: string;
  content: string;
}

export async function getTopics() {
  try {
    const response = await fetch("http://localhost:4000/topics");
    if (!response.ok) {
      throw new Error("Failed to fetch topics");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching topics:", error);
    return [];
  }
}
