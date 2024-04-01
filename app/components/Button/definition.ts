/**
 * @type required title
 * @type optional btnStyles
 * @type optional linkStyles
 * @type required elTag
 * @type required path
 * @type required type
 */
export type BtnProps = {
  title: string;
  btnStyles?: string;
  linkStyles?: string;
  elTag: 'linkTag' | 'btnTag';
  path?: string;
  type: 'button' | 'reset' | 'submit';
};
