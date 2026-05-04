'use strict';

/**
 * hexo-hide-posts (local script)
 * 
 * Hide posts with `hidden: true` in front matter from:
 *   - Home page (index)
 *   - Archive pages
 *   - Tag pages
 *   - Category pages
 *   - Recent posts widgets
 *   - RSS/Feed
 * 
 * The post WILL still be generated and accessible via its direct permalink URL.
 * 
 * Usage: Add `hidden: true` to the post's front matter.
 */

// Filter hidden posts from index generator output
hexo.extend.filter.register('index_generator', function (locals) {
  locals.posts = locals.posts.filter(function (post) {
    return !post.hidden;
  });
  return locals;
});

// Filter at template rendering stage — this catches index, archive, tag, category
hexo.extend.filter.register('template_locals', function (locals) {
  if (locals.page && locals.page.posts) {
    locals.page.posts = locals.page.posts.filter(function (post) {
      return !post.hidden;
    });
  }
  return locals;
});
