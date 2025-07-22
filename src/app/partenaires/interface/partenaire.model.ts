export interface Partenaire {
  id: number | null,
  alias: string,
  type: string,
  direction: string,
  application: string,
  processedFlowType: string,
  description: string | null,
  createdAt: string | null,
  updatedAt: string | null
}
