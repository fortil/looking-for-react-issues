import { IIssue } from "../store/initial-state";

export const data: IIssue[] = [
  {
    "url": "https://api.github.com/repos/facebook/react/issues/19674",
    "repository_url": "https://api.github.com/repos/facebook/react",
    "labels_url": "https://api.github.com/repos/facebook/react/issues/19674/labels{/name}",
    "comments_url": "https://api.github.com/repos/facebook/react/issues/19674/comments",
    "events_url": "https://api.github.com/repos/facebook/react/issues/19674/events",
    "html_url": "https://github.com/facebook/react/issues/19674",
    "id": 683852378,
    "node_id": "MDU6SXNzdWU2ODM4NTIzNzg=",
    "number": 19674,
    "title": "Add SuspenseList to DevTools Element Names",
    "user": { "test": "str" },
    "labels": [
      {
        "id": 710573595,
        "node_id": "MDU6TGFiZWw3MTA1NzM1OTU=",
        "url": "https://api.github.com/repos/facebook/react/labels/Component:%20Developer%20Tools",
        "name": "Component: Developer Tools",
        "color": "fbca04",
        "default": false,
        "description": null
      },
      {
        "id": 52079258,
        "node_id": "MDU6TGFiZWw1MjA3OTI1OA==",
        "url": "https://api.github.com/repos/facebook/react/labels/Difficulty:%20starter",
        "name": "Difficulty: starter",
        "color": "94ce52",
        "default": false,
        "description": null
      },
      {
        "id": 40929151,
        "node_id": "MDU6TGFiZWw0MDkyOTE1MQ==",
        "url": "https://api.github.com/repos/facebook/react/labels/Type:%20Bug",
        "name": "Type: Bug",
        "color": "b60205",
        "default": false,
        "description": null
      }
    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [],
    "milestone": null,
    "comments": 1,
    "created_at": "2020-08-21T22:09:50Z",
    "updated_at": "2020-08-22T01:30:51Z",
    "closed_at": null,
    "author_association": "MEMBER",
    "active_lock_reason": null,
    "body": "https://github.com/facebook/react/blob/49af88991c3a3e79e663e495458fad12d3162894/packages/react-devtools-shared/src/utils.js#L491\r\n\r\nWe have SuspenseList for the tree view but not when printing JSX.\r\n\r\nWhen we fallthrough here we call getDisplayName with a symbol, because we assume that if it's not a string, then it's a function. We should be checking whether it is a function before calling getDisplayName.\r\n\r\nSubsequently if we call getDisplayName with a symbol we get the error `invalid value used as weak map key` which messes up things after that. I think that's the actual cause of https://github.com/facebook/react/pull/19364",
    "performed_via_github_app": null
  },
  {
    "url": "https://api.github.com/repos/facebook/react/issues/19671",
    "repository_url": "https://api.github.com/repos/facebook/react",
    "labels_url": "https://api.github.com/repos/facebook/react/issues/19671/labels{/name}",
    "comments_url": "https://api.github.com/repos/facebook/react/issues/19671/comments",
    "events_url": "https://api.github.com/repos/facebook/react/issues/19671/events",
    "html_url": "https://github.com/facebook/react/issues/19671",
    "id": 683461914,
    "node_id": "MDU6SXNzdWU2ODM0NjE5MTQ=",
    "number": 19671,
    "title": "Discussion: Async cleanups of useEffect",
    "user": {},
    "labels": [
      {
        "id": 710375792,
        "node_id": "MDU6TGFiZWw3MTAzNzU3OTI=",
        "url": "https://api.github.com/repos/facebook/react/labels/Type:%20Discussion",
        "name": "Type: Discussion",
        "color": "fef2c0",
        "default": false,
        "description": null
      }
    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [],
    "milestone": null,
    "comments": 11,
    "created_at": "2020-08-21T10:26:29Z",
    "updated_at": "2020-08-21T15:01:36Z",
    "closed_at": null,
    "author_association": "CONTRIBUTOR",
    "active_lock_reason": null,
    "body": "Hi 👋 \r\n\r\nI've been asking about this on Twitter but was told that the issues here might be better to discuss this stuff.\r\n\r\nMy general concern is that async cleanups might lead to weird race conditions. It may be unwarranted but the concept itself sounds quite alarming to me and I'd like to discuss this, if possible.\r\n\r\nIf you go with the async cleanups then there is no guarantee that a scheduled work (or just any listeners) would get cleaned up before you get rid of a component instance, so for example:\r\n```js\r\nuseEffect(() => {\r\n  if (state !== 'foo') return\r\n  const id = setTimeout(() => setShouldAnimate(true), 300)\r\n  return () => clearTimeout(id)\r\n}, [state])\r\n```\r\nThis might not work as intended. There is an off-chance that the scheduled timeout will fire after the containing component unmounts but before the timer gets disposed.\r\n\r\nCalling `setState` after unmounting was always a sign of broken assumptions in the code or some programming error and React has been warning about it. I was told though that this has been accounted for and the warning is being suppressed now - so it won't pop up for users if `setState` got called in that short timeframe. So at least that's OK.\r\n\r\nI'm worried though that a disposed component can still cause an unwanted side-effect in a parent. One can imagine some scenarios where that would matter.\r\n\r\n1. orchestrating animation - an unmounted component tells the parent to trigger some sort of animation. The reason why the animation should happen is owned by a child, but it's also based on an additional timer because the reason might become invalid if the user performs some invalidating action quickly enough. It's not obvious here that `useLayoutEffect` should be used here to achieve instant cleanup.\r\n2. similar case: orchestrating some in-product tour, triggering tooltips, arrows, whatever in the parent. It becomes even less apparent that this should be `useLayoutEffect`-based to achieve instant clean up as this is not related to layout, even remotely. This is business logic.\r\n\r\nI hope my concerns are not warranted and you could clear up them for me, but right now I'm worried a lot that this is such a small difference for most of the people and that's it's hard to spot in the code that this might become a source of many very subtle bugs. \r\n\r\ncc @gaearon @bvaughn ",
    "performed_via_github_app": null
  },
  {
    "url": "https://api.github.com/repos/facebook/react/issues/19670",
    "repository_url": "https://api.github.com/repos/facebook/react",
    "labels_url": "https://api.github.com/repos/facebook/react/issues/19670/labels{/name}",
    "comments_url": "https://api.github.com/repos/facebook/react/issues/19670/comments",
    "events_url": "https://api.github.com/repos/facebook/react/issues/19670/events",
    "html_url": "https://github.com/facebook/react/issues/19670",
    "id": 683461312,
    "node_id": "MDU6SXNzdWU2ODM0NjEzMTI=",
    "number": 19670,
    "title": "Add documentation for views abstraction",
    "user": {},
    "labels": [
      {
        "id": 2281766624,
        "node_id": "MDU6TGFiZWwyMjgxNzY2NjI0",
        "url": "https://api.github.com/repos/facebook/react/labels/Component:%20Scheduling%20Profiler",
        "name": "Component: Scheduling Profiler",
        "color": "1dc3d6",
        "default": false,
        "description": ""
      }
    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [],
    "milestone": null,
    "comments": 0,
    "created_at": "2020-08-21T10:25:23Z",
    "updated_at": "2020-08-21T12:50:58Z",
    "closed_at": null,
    "author_association": "CONTRIBUTOR",
    "active_lock_reason": null,
    "body": "https://github.com/MLH-Fellowship/scheduling-profiler-prototype/pull/80 implemented a views abstraction for the Scheduling Profiler. Although the PR description is reasonably comprehensive, it needs clearer documentation for future contributors.\r\n\r\nThese blogs written by @taneliang explain the design and implementation in detail. We should port these to a MD file as discussed with @bvaughn.\r\n\r\n- https://blog.eliangtan.com/view-framework-1/\r\n- https://blog.eliangtan.com/view-framework-2/",
    "performed_via_github_app": null
  }
];

test('its ok', () => {
  expect(true).toBe(true);
})