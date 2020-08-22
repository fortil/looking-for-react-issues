export interface ILabel {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string | null
}
export interface IIssue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: { [k: string]: string };
  labels: ILabel[];
  state: string;
  locked: boolean;
  assignee: { [k: string]: string } | null;
  assignees: { [k: string]: string }[];
  milestone: null;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: string | null;
  author_association: string;
  active_lock_reason: string | null;
  body: string;
  performed_via_github_app: string | null;
}

export interface IInitialState {
  ISSUES_SELECTED: IIssue[];
  LOADING: boolean;
  ISSUES: IIssue[];
}
const INITIAL_STATE: IInitialState = {
  ISSUES_SELECTED: [],
  LOADING: false,
  ISSUES: [],
};

export default INITIAL_STATE;