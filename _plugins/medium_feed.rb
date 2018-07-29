require 'feedjira'
require 'nokogiri'

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

    def getPostImage(content)
      content = Nokogiri::HTML(content.to_s)
      imgNode = content.search('img')[0]
      if imgNode['width'].to_i != 1 && imgNode['height'].to_i != 1
        return content.search('img')[0]['src']
      else
        return 'http://writingexercises.co.uk/images2/randomimage/boat.jpg' # random image!! change to default image
      end
    end

    feed_url = "https://blog.usejournal.com/feed"
    # feed_url = "https://medium.com/feed/@szacho"
    Feedjira::Feed.fetch_and_parse(feed_url).entries.each do |e|
        i = 0
        categories = []
        while i <= 2 # limit categories
          if e[:categories][i]
            categories.push(e[:categories][i])
          end
          i += 1
        end

        title = e[:title]
        content = e[:content]
        date = e[:published]
        guid = e[:url]
        author = e[:author]

        path = "./_medium_feed/" + title.downcase + ".md"
        path = site.in_source_dir(path)
        doc = Jekyll::Document.new(path, { :site => site, :collection => jekyll_coll })

        doc.data['title'] = title
        doc.data['author'] = author
        doc.data['date'] = date
        doc.data['feed_content'] = formatContent(content)
        doc.data['image'] = getPostImage(content)
        doc.data['categories'] = categories
        doc.data['layout'] = 'article'
        doc.data['isMedium'] = true
        doc.data['comments'] = true
        jekyll_coll.docs << doc
      end
    end
  end
end
