function isProgram(
  node: ExtendedNode | n.Node
): node is ExtendedNodeT<n.Program> {
  return node.type === 'Program'
}
