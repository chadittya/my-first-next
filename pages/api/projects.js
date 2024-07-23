export default function handler(req, res) {
  const projects = [
    { id: 1, title: "Project One", description: "Description of project one." },
    { id: 2, title: "Project Two", description: "Description of project two." },
  ];
  res.status(200).json(projects);
}
