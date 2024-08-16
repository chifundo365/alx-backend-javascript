export default function guardrail(mathFunction) {
  const msg = 'Guardrail was processed';
  const queue = [];
  try {
    queue.push(mathFunction());
    queue.push(msg);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
    queue.push(msg);
  }

  return queue;
}
