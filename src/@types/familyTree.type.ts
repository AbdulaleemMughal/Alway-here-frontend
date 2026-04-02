export type FamilyTreeType = {
  _id: string;
  memorialId: string;
  heading: string;
  isActive: boolean;
  treeData: TreeDataType;
  createdAt: string;
  updatedAt: string;
};

export type TreeDataType = {
  children: BranchType[] | [];
  f_grandFather: BranchType | null;
  f_grandMother: BranchType | null;
  father: BranchType | null;
  siblings: BranchType[] | [];
  m_grandFather: BranchType | null;
  m_grandMother: BranchType | null;
  mother: BranchType | null;
  wifes: BranchType[] | [];
};

export type BranchType = {
  _id?: string;
  name: string;
  img: string;
};

export type UpdateFamilyTreePayload = {
  heading?: string;
  isActive?: boolean;
};
