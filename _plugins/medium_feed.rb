require 'feedjira'

module Jekyll
  class MediumFeed < Generator
    safe true
    priority :high

def generate(site)
  jekyll_coll = Jekyll::Collection.new(site, 'medium_feed')
  site.collections['medium_feed'] = jekyll_coll

feed_url = "https://towardsdatascience.com/feed"
# feed_url = "https://medium.com/feed/@szacho"
Feedjira::Feed.fetch_and_parse(feed_url).entries.each do |e|
        # p "Title: #{e.title}, published on Medium #{e.url} #{e}"
        title = e[:title]
        content = e[:content]
        date = e[:published]
        categories = e[:categories]
        guid = e[:url]
        path = "./_medium_feed/" + title.downcase + ".md"
        path = site.in_source_dir(path)
        doc = Jekyll::Document.new(path, { :site => site, :collection => jekyll_coll })
        doc.data['title'] = title;
        doc.data['feed_content'] = content;
        doc.data['date'] = date
        doc.data['categories'] = categories
        doc.data['layout'] = 'article'
        doc.data['isMedium'] = true
        jekyll_coll.docs << doc
      end
    end
  end
end
