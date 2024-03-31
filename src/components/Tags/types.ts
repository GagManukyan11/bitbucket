import { ITag } from "../LogiClike/types";

export interface ITagsParams {
    tags: ITag[];
    handleTagClick: (tagId: number) => void
  }