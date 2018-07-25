require 'feedjira'

module Jekyll
  class MediumFeed < Generator
    safe true
    priority :high

    def generate(site)
      jekyll_coll = Jekyll::Collection.new(site, 'medium_feed')
      site.collections['medium_feed'] = jekyll_coll

    def formatContent(content)
      content.gsub! '<h3>', '<h2>'
      content.gsub! '</h3>', '</h2>'
      content.gsub! '<h4>', '<h3>'
      content.gsub! '</h4>', '</h3>'
      return content
    end

    feed_url = "https://blog.usejournal.com/feed"
    # feed_url = "https://medium.com/feed/@szacho"
    Feedjira::Feed.fetch_and_parse(feed_url).entries.each do |e|
        i = 0
        categories = []
        while i <= 2 # limit categories, dev only
          if e[:categories][i]
            categories.push(e[:categories][i].split('-').join(' '))
          end
          i += 1
        end
        title = e[:title]
        content = e[:content]
        date = e[:published]
        guid = e[:url]
        path = "./_medium_feed/" + title.downcase + ".md"
        path = site.in_source_dir(path)
        doc = Jekyll::Document.new(path, { :site => site, :collection => jekyll_coll })


        doc.data['feed_content'] = formatContent(content)


        doc.data['title'] = title
        doc.data['date'] = date
        doc.data['origin'] = guid
        doc.data['categories'] = categories
        doc.data['layout'] = 'article'
        doc.data['isMedium'] = true
        doc.data['comments'] = true
        jekyll_coll.docs << doc
      end
    end
  end
end
